Rails.application.routes.draw do

  devise_for :users
  
  resources :blogs do
    resources :comments, :only => [:create, :destroy]
  end

  match '/blogs/:blog_id/comments/:id' => 'comments#destroy', via: [:delete, :get]

  post "/blogs/:blog_id/comments/:id" => 'comments#comment_approve', as: :comment_approve 

  get '/comments_to_approve' => 'blogs#comments_to_approve', as: :comments_to_approve

  root 'homepages#blogs'

end