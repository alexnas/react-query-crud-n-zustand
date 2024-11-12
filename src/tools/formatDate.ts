import { format } from 'fecha';

export const formatDateTime = (dateString: string) => {
  try {
    return format(new Date(dateString), 'YYYY-MM-DD, HH:mm');
  } catch (error) {
    console.log(error);
  }
};

export const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), 'YYYY-MM-DD');
  } catch (error) {
    console.log(error);
  }
};
