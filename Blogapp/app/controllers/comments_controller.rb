class CommentsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    blog = Blog.find(params[:blog_id])
    @comment = blog.comments.create(comment_params)
    send_approval_email(blog.title)        
    redirect_to blog_path(blog)
  end

  def comment_approve
  	blog = Blog.find(params[:blog_id])
  	comment = blog.comments.find(params[:id])
  	comment.update(approved: true)
  	redirect_to blog_path(blog)
  end

  def destroy
  	@blog = Blog.find(params[:blog_id])
  	comment = @blog.comments.find(params[:id])
  	comment.destroy
  	redirect_to blog_path(@blog)
  end

  def send_approval_email(blog_title)
    user_agent = UserAgent.parse(request.env["HTTP_USER_AGENT"])
    client_ip = request.ip    
    AdminMailer.email_approval(blog_title, params[:comment][:user_name], params[:comment][:email], params[:comment][:message], user_agent, client_ip).deliver_now
    flash[:info] = "Your comment is waiting for our admin approval"
  end

  private

  def comment_params
  	params.require(:comment).permit(:user_name,:email,:website,:message,:approved)
  end

end
