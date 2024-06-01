import Login from "./Login";
import Register from "./Register";
import CheckEmail from "./CheckEmail";
import Forgot from "./Forgot";
import Reset from 'screens/Reset';
import Welcome from 'screens/Welcome';
import Security from 'screens/Security';
import WhiteWelcome from 'screens/WhiteWelcome';
import Automate from 'screens/Automate';
import Notify from 'screens/Notify';
import Irrigate from 'screens/Irrigate';
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Notifications from "./Notifications";
import Profile from "./Profile";

export interface LoginProps {
  navigation: any;
}

export interface RegisterProps {
  navigation: any;
}

export interface RegisterProps {
  navigation: any;
}

export interface CheckEmailProps {
  navigation: any;
}

export interface ForgotProps {
  navigation: any;
}

export interface IrrigateProps {
  navigation: any;
}

export interface WelcomeProps {
  navigation: any;
}

export interface WhiteWelcomeProps {
  navigation: any;
}

export interface SecurityProps {
  navigation: any;
}

export interface AutomateProps {
  navigation: any;
}

export interface NotifyProps {
  navigation: any;
}

export interface SettingsProps {
  navigation: any;
}

export interface DashboardProps {
  navigation: any;
}


export {
  Login,
  Register,
  CheckEmail,
  Forgot,
  Irrigate, 
  Reset,
  Welcome,
  WhiteWelcome,
  Notify,
  Security,
  Automate,
  Settings,
  Dashboard,
  Notifications,
  Profile
};
