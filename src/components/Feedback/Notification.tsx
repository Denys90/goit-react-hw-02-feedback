import React from 'react';

type Props = {
  message: string;
};
const Notification = ({ message }: Props) => {
  return <p>{message}</p>;
};
export default Notification;
