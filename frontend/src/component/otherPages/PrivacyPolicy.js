import React, { Fragment } from "react";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <div class="relative overflow-hidden bg-white py-16 px-9">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-prose text-lg">
            <h1>
              <span class="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
                Privacy Policy
              </span>
              <span class="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Our Privacy Policy
              </span>
            </h1>
          </div>
          <div class="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
            <p>
              Pixies takes the privacy of your information seriously. This
              Privacy Notice describes the types of personal information we
              collect from you through our stores, website (including
              sub-domains and microsites) and mobile applications. It also
              describes the purposes for which we collect that personal
              information, the other parties with whom we may share it and the
              measures we take to protect the security of your data. It also
              tells you about your rights and choices with respect to your
              personal information, and how you can contact us about our privacy
              practices. You are advised to carefully read this Privacy Notice
              before using or availing any of our products and/or services.
            </p>

            <p className="font-bold">
              In this Privacy Notice, the following definitions are used:
            </p>
            <p>
              {" "}
              <h2 className="font-bold">Cookies</h2>
              <p className="py-2 px-2">
                a small file placed on your device by our website or mobile
                application when you either visit or use certain features of our
                website or mobile application. A cookie generally allows a
                website to remember your actions or preference for a certain
                period of time.{" "}
              </p>
              <h2 className="font-bold">Data</h2>
              <p className="py-2 px-2">
                includes non-personal information, personal information and
                sensitive personal information about you, which either directly
                or indirectly in combination with other information, could allow
                you to be identified when you visit our stores, website and/or
                mobile application.
              </p>
              <h2 className="font-bold">Data protection law</h2>
              <p className="py-2 px-2">
                any applicable law for the time being in force relating to the
                processing of Data.
              </p>
              <h2 className="font-bold">Service provider</h2>
              <p className="py-2 px-2">
                includes entities to whom we or other Tata Group Entities will
                disclose your Data in order to process information for a
                specific purpose pursuant to written contract.
              </p>
            </p>
            <h1 className="font-bold">What do we collect about you</h1>
            <ul className="list-disc mt-2">
              <li>
                Contact information: first and last name, email address, postal
                address, country, employer, phone number and other similar
                contact data.
              </li>
              <li>
                Financial information: payment instrument information,
                transactions, transaction history, preferences, method, mode and
                manner of payment, spending pattern or trends, and other similar
                data.
              </li>
              <li>
                Technical information: website, device and mobile app usage,
                Internet Protocol (IP) address and similar information collected
                via automated means, such as cookies, pixels and similar
                technologies.
              </li>
              <li>
                Transaction information: the date of the transaction, total
                amount, transaction history and preferences and related details.
              </li>
              <li>
                Product and service information: Your account membership number,
                registration and payment information, and program-specific
                information, when you request products and/or services directly
                from us, or participate in marketing programs.
              </li>
              <li>
                Personal information: Age, sex, date of birth, marital status,
                nationality, details of government identification documents
                provided, occupation, ethnicity, religion, travel history or any
                other personal information provided in responses to surveys or
                questionnaires.
              </li>
              <li>
                Your reviews, feedback and opinions about our products,
                programmes and services.
              </li>
              <li>
                Loyalty programme information: your loyalty membership
                information, account details, profile or password details and
                any frequent flyer or travel partner programme affiliation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicy;
