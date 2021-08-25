class UsersController < ApplicationController
  def index
    puts "index called"
    users = User.all 
    render component: "Users", props: {users: users}
  end

  def new
    render component: "NewUser"
  end
  
  def create #creates user in memory
   user = User.new(user_params)
   if user.save
    redirect_to users_path
   else

    #render component: "Users", props: {users: users}

   end
  end

  private

  def user_params
    params.require(:user).permit(:name, :age, :phone, :email)
end
end
