# frozen_string_literal: true

# The Application Mailer is base for application mailer
class ApplicationMailer < ActionMailer::Base
  default from: 'hrm@gmail.com'
  layout 'mailer'
end
