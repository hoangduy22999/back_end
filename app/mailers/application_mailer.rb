# frozen_string_literal: true

# The Application Mailer is base for application mailer
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
