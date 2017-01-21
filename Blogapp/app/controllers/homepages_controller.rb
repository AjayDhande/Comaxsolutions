class HomepagesController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def blogs
	 @blogs = Blog.all
     if params[:search]
       @blogs = Blog.search(params[:search]).order("created_at DESC").paginate(:page => params[:page], :per_page => 5)
     else
       @blogs = Blog.all.order("created_at DESC").paginate(:page => params[:page], :per_page => 5)
     end
	end

end  
