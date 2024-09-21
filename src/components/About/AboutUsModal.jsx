import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import {
  Button,
  Header,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
} from "semantic-ui-react";

export default function AboutUsModal() {
  const [open, setOpen] = useState(false); // For modal
  return (
    <div className={`absolute right-2 z-[1305] w-full flex justify-end px-3`}>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={
          <button
            className={`flex items-center justify-center gap-x-1.5 text-sm`}
          >
            <span className="text-slate-300">About Us</span>
            <span className={`mb-0.5`}>
              <BsQuestionCircle />
            </span>
          </button>
        }
      >
        <Header icon>
          <Icon name="archive" />
          Archive Old Messages
        </Header>
        <ModalContent>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </ModalContent>
        <ModalActions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> Yes
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}
