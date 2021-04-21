import { lazy } from "react";

export const SignIn = lazy(() => import("./components/signIn-signUp/signIn"));
export const SignUp = lazy(() => import("./components/signIn-signUp/signUp"));
export const Verification = lazy(() =>
  import("./components/signIn-signUp/verification")
);
export const Map = lazy(() => import("./components/map/index"));
export const Profile = lazy(() => import("./components/profile"));
export const CreateNewSampleSet = lazy(() =>
  import("./components/sampleSetUpload")
);
export const AnnotateTwo = lazy(() => import("./components/annotate-dusko"));
