import React from "react";
import "./style.css";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-header">{children}</div>;
};

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-body">{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export { Card, CardHeader, CardBody };
