"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Star, Award, Instagram, Facebook, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedAurora"
      cardStyle="outline-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoText="Smakokota"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reservations", id: "reservations" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage
          logoText="SMAKOKOTA"
          description="Discover the art of exceptional dining. Experience authentic flavors, elegant ambiance, and impeccable service that celebrate culinary excellence."
          buttons={[
            { text: "Reserve a Table", href: "#reservations" },
            { text: "View Menu", href: "#menu" }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137146177-jr92epk1.jpg"
          splitImageAlt="Smakokota Restaurant Interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Our Story"
          description="Founded on a passion for culinary excellence, Smakokota brings together tradition and innovation."
          tag="About"
          textboxLayout="default"
          contentTag="CULINARY EXCELLENCE"
          contentTitle="Crafted with Care, Served with Pride"
          contentDescription="Every dish at Smakokota represents our commitment to quality ingredients, masterful preparation, and unforgettable dining experiences. Our team of experienced chefs creates menus that celebrate local flavors while embracing global culinary techniques."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140575248-si7knyk9.jpg"
          imageAlt="Chef preparing a dish"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          products={[
            {
              id: "1",
              name: "Pan-Seared Branzino",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140576454-ilb8tipu.jpg",
              imageAlt: "Pan-seared branzino with seasonal vegetables"
            },
            {
              id: "2",
              name: "Truffle Risotto",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140577341-1c3bpnuc.jpg",
              imageAlt: "Creamy truffle risotto with parmesan"
            },
            {
              id: "3",
              name: "Chocolate Soufflé",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140578361-gg270zk8.jpg",
              imageAlt: "Decadent chocolate soufflé dessert"
            }
          ]}
          title="Signature Dishes"
          description="Handcrafted specialties featuring premium ingredients and meticulous preparation"
          tag="Menu"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          testimonials={[
            {
              id: "1",
              name: "Margaret Chen",
              role: "Food Critic",
              company: "Gourmet Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg",
              imageAlt: "Margaret Chen portrait"
            },
            {
              id: "2",
              name: "James Robertson",
              role: "Restaurant Owner",
              company: "Fine Dining Association",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140579484-05cxiqyk.jpg",
              imageAlt: "James Robertson portrait"
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Executive Chef",
              company: "Michelin Guide Contributor",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140580332-mlho1k6m.jpg",
              imageAlt: "Sophie Laurent portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Hospitality Director",
              company: "Luxury Dining Network",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "David Park portrait"
            }
          ]}
          title="Guest Reviews"
          description="Hear from those who have experienced Smakokota's exceptional dining"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139812276-3mjs656a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139809955-6pjg7i02.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140582188-yc2eq6jt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140583014-r4zhryon.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139812995-8sbtos96.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140583824-0thdxmzl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139810762-1euljwkk.jpg"
          ]}
          title="Featured In"
          description="Recognized by leading culinary organizations and media outlets"
          tag="Press"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready for an unforgettable dining experience?"
          inputPlaceholder="Enter your email"
          buttonText="Join Our List"
          animationType="entrance-slide"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Smakokota"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Private Events", href: "#" }
              ]
            },
            {
              title: "Reservations",
              items: [
                { label: "Book a Table", href: "#reservations" },
                { label: "Contact Us", href: "#contact" },
                { label: "Hours & Location", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Email", href: "mailto:info@smakokota.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Mail, href: "mailto:info@smakokota.com", ariaLabel: "Email" }
          ]}
          copyrightText="© Smakokota Restaurant 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}