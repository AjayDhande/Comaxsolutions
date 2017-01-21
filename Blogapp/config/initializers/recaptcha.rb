ENV['RECAPTCHA_PUBLIC_KEY'] = '6LdxRRcTAAAAAOccCOY0FJV_FM0CKUf09rJHqQpW'
ENV['RECAPTCHA_PRIVATE_KEY'] = '6LdxRRcTAAAAANIu2wzv3o69fgedrLRzOtOvojoy'

Recaptcha.configure do |config|
  config.public_key  = '6LdxRRcTAAAAAOccCOY0FJV_FM0CKUf09rJHqQpW'
  config.private_key = '6LdxRRcTAAAAANIu2wzv3o69fgedrLRzOtOvojoy'
  # Uncomment the following line if you are using a proxy server:
  # config.proxy = 'http://myproxy.com.au:8080'
end

#### For Development mode ##########

# ENV['RECAPTCHA_PUBLIC_KEY'] = '6LdURhcTAAAAAENHDDQbFYPRbrkfh4pxR32CCoz5'
# ENV['RECAPTCHA_PRIVATE_KEY'] = '6LdURhcTAAAAAIIidosVhcg3Zk1wxrR88DT91eNF'

# Recaptcha.configure do |config|
#   config.public_key  = '6LdURhcTAAAAAENHDDQbFYPRbrkfh4pxR32CCoz5'
#   config.private_key = '6LdURhcTAAAAAIIidosVhcg3Zk1wxrR88DT91eNF'
#   # Uncomment the following line if you are using a proxy server:
#   # config.proxy = 'http://myproxy.com.au:8080'
# end