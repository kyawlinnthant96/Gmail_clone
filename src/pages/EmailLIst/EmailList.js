import React, { useEffect, useState } from "react";
// style
import "./EmailList.css";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import EmailRow from "../../components/EmailRow/EmailRow";
import Section from "../../components/Section/Section";
import { db } from "../../firebase-config";

function EmailList() {
  const [emails, setEmails] = useState([]);
  const emailRef = collection(db, "emails");
  const orderRef = query(emailRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    const getEmailLists = async () => {
      const data = onSnapshot(orderRef, (snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };
    getEmailLists();
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1a73e8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
        <EmailRow
          title="test"
          subject="This is test"
          description="blabla"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
