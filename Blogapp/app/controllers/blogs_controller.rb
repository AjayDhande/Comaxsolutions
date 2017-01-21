class BlogsController < ApplicationController

  before_action :authenticate_user!, except: [:show]

  def index
    @blogs = Blog.all.order(id: :desc).paginate(:page => params[:page], :per_page => 20)
  end

  def new
    @blog = Blog.new
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to @blog
    else
      render 'new'
    end
  end

  def show
    @blog = Blog.friendly.find(params[:id])
    @latest_blogs = Blog.last(15).reverse 
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      redirect_to @blog
    else
      render 'edit'
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to blogs_path
  end

  def comments_to_approve
    blog_id = Comment.where(approved: nil).pluck(:blog_id).uniq
    @blogs = Blog.find(blog_id).sort!.reverse.paginate(:page => params[:page], :per_page => 20)
  end

  private
    def blog_params
      params.require(:blog).permit(:title,:image,:created_by,:category,:body)
    end

    def comment_params
      params.require(:comment).permit(:user_name,:email,:website,:message,:approved)
    end

end
