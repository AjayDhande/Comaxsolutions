class HomepagesController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def blogs
		@blogs = Blog.all.order(id: :desc).paginate(:page => params[:page], :per_page => 5)
	end

end
