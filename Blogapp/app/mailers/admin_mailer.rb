class AdminMailer < ActionMailer::Base
  default from: 'ad091313@gmail.com'
 
  def email_approval(blog_title, name, email, message, user_agent, client_ip)
    @blog_title = blog_title
    @name = name
    @email = email
    @message = message
    @browser = user_agent.browser
    @client_ip = client_ip
    mail(to: "#{ENV['admin_email']}", subject: "Comment Approval")
  end
  
end
	