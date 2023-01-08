import Footer from "../../components/Footers/footer";
import Contact from "../../components/LandingPageSection/contact";
import TopFixedNavbar from "../../components/Navbars/top-fixed-navbar";

export default function Privacy() {
  return (
    <>
      <TopFixedNavbar />
      <main>
        <section className="pb-20 relative block bg-slate-500">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  User Privacy Policies
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-100">
                  <h2 className="text-4xl font-semibold text-white">who we are</h2>
                  Surge Ryders is an infotech based transportation company established to bring ease to the transportation sector of a stipulated environments.

                  <h2 className="text-4xl font-semibold text-white">comments</h2>
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

                  An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.

                  <h2 className="text-4xl font-semibold text-white">media</h2>
                  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.

                  <h2 className="text-4xl font-semibold text-white">cookies</h2>
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

                  If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

                  When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

                  If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.

                  <h2 className="text-4xl font-semibold text-white">embedded content from other websites</h2>
                  Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

                  These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.

                  <h2 className="text-4xl font-semibold text-white">who we share your data with</h2>
                  If you request a password reset, your IP address will be included in the reset email.

                  <h2 className="text-4xl font-semibold text-white">how long we retain your data</h2>
                  If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.

                  <h2 className="text-4xl font-semibold text-white">what rights you have over your data</h2>
                  If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.

                  <h2 className="text-4xl font-semibold text-white">where your data is sent</h2>
                  Visitor comments may be checked through an automated spam detection service.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}