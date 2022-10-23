# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_221_023_164_605) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'users', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'phone', null: false
    t.string 'email', limit: 255
    t.datetime 'birthday'
    t.string 'encrypted_password', limit: 255, default: '', null: false
    t.string 'reset_password_token', limit: 255
    t.integer 'role', default: 0, null: false
    t.integer 'user_type', default: 0, null: false
    t.integer 'gender', default: 0, null: false
    t.datetime 'reset_password_sent_at', precision: 6
    t.datetime 'remember_created_at', precision: 6
    t.integer 'sign_in_count', default: 0
    t.datetime 'current_sign_in_at', precision: 6
    t.datetime 'last_sign_in_at', precision: 6
    t.string 'current_sign_in_ip', limit: 255
    t.string 'last_sign_in_ip', limit: 255
    t.string 'avatar'
    t.string 'avatar_tmp'
    t.integer 'status', default: 0, null: false
    t.bigint 'ward_id'
    t.bigint 'district_id'
    t.bigint 'province_id'
    t.string 'address'
    t.string 'tel'
    t.bigint 'referral_id'
    t.bigint 'creator_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['district_id'], name: 'index_users_on_district_id'
    t.index ['email'], name: 'index_users_on_email'
    t.index ['province_id'], name: 'index_users_on_province_id'
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
    t.index ['role'], name: 'index_users_on_role'
    t.index ['status'], name: 'index_users_on_status'
    t.index ['user_type'], name: 'index_users_on_user_type'
    t.index ['ward_id'], name: 'index_users_on_ward_id'
  end
end
