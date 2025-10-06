import React from 'react';
import { useLoading } from "./LoadingContext";
import LoadingScreen from './LoadingScreen';

const GlobalLoading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return <LoadingScreen />;
};

export default GlobalLoading;