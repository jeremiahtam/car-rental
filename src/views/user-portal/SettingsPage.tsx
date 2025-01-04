import { DashboardContainer } from "../../components/DashboardContainer";
import { UserChangePassword } from "../../components/UserChangePassword";
import { UserUpdateProfile } from "../../components/UserUpdateProfile";
import { UserUpdateProfilePic } from "../../components/UserUpdateProfilePic";

export const SettingsPage = () => {
  return (
    <DashboardContainer>
      <div className="text-lg font-semibold my-4 text-gray-600">Profile</div>
      <div className="container mx-auto flex flex-col md:flex-row my-8 gap-6">
        <div className="md:basis-2/3">
          <UserUpdateProfile />
        </div>
        <div className="md:basis-1/3">
          <div className="flex flex-col gap-6">
            <UserUpdateProfilePic />
            <UserChangePassword />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};
