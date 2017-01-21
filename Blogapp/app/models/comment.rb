class Comment < ActiveRecord::Base
  belongs_to :blog

  validates :user_name, :email, :message, presence: true
end
