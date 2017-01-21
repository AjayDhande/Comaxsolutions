class Blog < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]
	
  has_many :comments, dependent: :destroy

  validates :title, presence: true,
	                      length: { minimum: 5 }

  has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "930x344" }
  validates_attachment :image, :presence => true,
									 :size => {:in => 0..950.kilobytes},
									 :content_type => {:content_type => ["image/jpeg", "image/jpg", "image/png"]}              


  def self.search(search)
    where("title LIKE ? OR category LIKE ? OR body LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%") 
  end                   
                   
end
