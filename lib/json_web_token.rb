# frozen_string_literal: true

class JsonWebToken
  class << self
    def encode(payload, exp = 30.days.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, ENV['SECRET_KEY_BASE'])
    end

    def decode(token)
      body = JWT.decode(token, ENV['SECRET_KEY_BASE']).first
      HashWithIndifferentAccess.new body
    rescue StandardError
      nil
    end
  end
end
