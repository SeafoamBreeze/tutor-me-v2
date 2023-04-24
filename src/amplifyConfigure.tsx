"use client"; // this is required

import { Amplify, API, Auth, Storage } from "aws-amplify";
import awsconfig from './aws-exports';

Amplify.configure({ ...awsconfig, ssr: true });
API.configure({ ...awsconfig, ssr: true });
Auth.configure({ ...awsconfig, ssr: true });
Storage.configure({ ...awsconfig, ssr: true });