export type eventFormData = {
  parentName: string;
  childName: string;
  phone: string;
  email: string;
  attendees: string;
  message: string;
};

export type EventRegistrationModalProps = {
  open: boolean;
  onClose: () => void;
  eventTitle: string;
};