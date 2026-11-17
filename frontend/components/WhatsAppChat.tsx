
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import "./WhatsAppChat.css";

const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER; // Replace with your WhatsApp number

export default function WhatsAppChat() {
  const message = encodeURIComponent(
    "Hello Alvitoz Technology! I'm interested in your services. I'd like to know more."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat with Alvitoz Technology on WhatsApp"
    >
      <span className="whatsapp-tooltip">
        <span className="whatsapp-status-dot" />
        <span>
          <strong>Chat with us</strong>
          <small>We'd love to hear from you</small>
        </span>
        <ArrowUpRight size={17} />
      </span>

      <span className="whatsapp-button">
        <span className="whatsapp-pulse" />
        <MessageCircle size={29} strokeWidth={2} />
        <span className="whatsapp-online-dot" />
      </span>
    </Link>
  );
}
