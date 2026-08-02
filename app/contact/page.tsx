import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
  <>
    <Navbar showLogo={false} />

    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-slate-300 max-w-2xl text-lg leading-8">
            We're here to help. Whether you have questions about
            your account, online banking or our financial services,
            our team is ready to assist you.
          </p>

        </div>

      </section>

      {/* Contact Information */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-4">

                <MapPin className="text-red-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-slate-900">
  Registered Office
</h3>

                  <p className="text-slate-600 mt-2 leading-7">
                    33 St James's Square
                    <br />
                    St James's
                    <br />
                    London SW1Y 4JS
                    <br />
                    England
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-red-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Telephone
                  </h3>

                  <p className="text-slate-600 mt-2">
                    +44 79 536 23468
                    <br />
                    +44 73 554 53466
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-red-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="text-slate-600 mt-2">
                    info@standardunionbank.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="text-red-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Business Hours
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Monday – Friday
                    <br />
                    8:30 AM – 5:30 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10">

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                rows={6}
                placeholder="How can we help you?"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

             </main>

      <Footer />
    </>
  );
}