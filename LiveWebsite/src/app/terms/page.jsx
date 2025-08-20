"use client";

import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"; // Adjust the import path if needed
import { Card, CardContent, CardHeader } from "../../components/ui/card"; // Adjust the import path if needed

// A reusable component for the document header
const DocumentHeader = () => (
  <div className="mb-8 text-center text-sm text-gray-600">
    <p className="font-semibold text-lg text-gray-800">Vritti Groups</p>
    <p>
      Ground Floor, Door no 4-80/10, KKMP Commercial Complex, Mahathmnagar
      Layout,
    </p>
    <p>Kavoor, Mangaluru, Dakshina Kannada, Karnataka, 575015</p>
    <p className="mt-2">
      <span className="font-semibold">Tax ID:</span> 29AAUFV9970A1ZE
    </p>
    <p className="mt-2">
      <span className="font-semibold">Effective Date:</span> May 13, 2025
    </p>
  </div>
);

// A reusable component for styling each section of the T&C
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <DocumentHeader />

        <Tabs defaultValue="users" className="w-full">
          {/* Tab Toggles */}
          <TabsList className="grid w-full grid-cols-3 bg-gray-200 rounded-lg p-1 mb-8">
            <TabsTrigger value="users">For Users</TabsTrigger>
            <TabsTrigger value="organizations">For Organizations</TabsTrigger>
            <TabsTrigger value="agencies">For Agencies</TabsTrigger>
          </TabsList>

          {/* USERS T&C CONTENT */}
          <TabsContent value="users">
            <Card className="p-6 sm:p-8 shadow-md">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
                Terms and Conditions for Users
              </h2>
              <Section title="1. Introduction">
                <p>
                  1.1 These Terms and Conditions ("T&C") govern your access to
                  and use of the Vritti mobile applications (iOS & Android) and
                  web portal (collectively, the "Platform").
                </p>
                <p>
                  1.2 By registering, logging in, or otherwise using the
                  Platform, you (“Candidate”) agree to be bound by these T&C.
                </p>
              </Section>
              {/* Add all other sections for Users here following the pattern */}
              <Section title="2. Definitions">
                <p>
                  <b>Candidate:</b> Any individual registering on the Platform
                  for training, certification, and placement services.
                </p>
                <p>
                  <b>Services:</b> All functionalities and support provided
                  through the Platform.
                </p>
              </Section>
              {/* ... continue for all user sections */}
            </Card>
          </TabsContent>

          {/* ORGANIZATIONS T&C CONTENT */}
          <TabsContent value="organizations">
            <Card className="p-6 sm:p-8 shadow-md">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
                Terms and Conditions for Organizations
              </h2>

              <Section title="1. Introduction">
                <p>
                  1.1 These Terms and Conditions ("T&C") govern your access to
                  and use of the Vritti Platform as an employer or organization
                  (“Organization”).
                </p>
                <p>
                  1.2 By registering or using the Platform, you agree to these
                  T&C.
                </p>
              </Section>

              <Section title="2. Definitions">
                <p>
                  <b>Organization:</b> A legal entity with a valid trade license
                  and tax certificate seeking to recruit verified Candidates.
                </p>
                <p>
                  <b>Services:</b> Features and support provided through the
                  Platform.
                </p>
              </Section>

              <Section title="3. Eligibility & Verification">
                <p>
                  3.1 Organizations must provide valid trade license, tax
                  certificate, official address, and point-of-contact (POC)
                  details.
                </p>
                <p>
                  3.2 Vritti reserves the right to verify, suspend, or terminate
                  Organization accounts for fraudulent or incomplete
                  documentation.
                </p>
              </Section>

              <Section title="4. Account Use">
                <p>
                  4.1 Organizations shall use the Platform only for reviewing
                  verified Candidates and posting legitimate job opportunities.
                </p>
                <p>
                  4.2 Organizations must obtain Candidate consent via the
                  Platform before accessing personal contact details.
                </p>
              </Section>

              <Section title="5. Intellectual Property & Confidentiality">
                <p>
                  5.1 All Platform content and software are the property of
                  Vritti Groups.
                </p>
                <p>
                  5.2 Organizations shall not copy, reproduce, reverse engineer,
                  or create derivative works of the Platform or its content.
                </p>
                <p>
                  5.3 Confidential information shared by Vritti—including
                  Candidate database access—must not be used to develop
                  competing services or products.
                </p>
              </Section>

              <Section title="6. Service Tiers & Fees">
                <p>
                  6.1 <b>Free Tier:</b> search verified Candidates, view
                  interview recordings, request contact details.
                </p>
                <p>
                  6.2 <b>Paid Tier:</b> end-to-end recruitment services as
                  specified in the pricing schedule.
                </p>
                <p>
                  6.3 Fees are non-refundable and subject to 30 days’ notice for
                  changes.
                </p>
              </Section>

              <Section title="7. Data Privacy">
                <p>
                  7.1 Organization data is processed as per the separate
                  Organization Privacy Policy.
                </p>
                <p>
                  7.2 Misuse of Candidate data constitutes a breach of these T&C
                  and may result in termination and legal action.
                </p>
              </Section>

              <Section title="8. Confidentiality & Non-Compete">
                <p>
                  8.1 Organizations agree to maintain strict confidentiality of
                  all Platform materials and data.
                </p>
                <p>
                  8.2 Organizations shall not solicit Candidates off-platform
                  for competing services for a period of 24 months after data
                  access.
                </p>
              </Section>

              <Section title="9. Force Majeure">
                <p>
                  Neither party shall be liable for delays due to causes beyond
                  its reasonable control, including acts of God, war, or natural
                  disasters.
                </p>
              </Section>

              <Section title="10. Termination">
                <p>
                  10.1 Organizations may terminate their account at any time
                  with written notice to info@vrittigroup.com.
                </p>
                <p>
                  10.2 Vritti may suspend or terminate accounts for T&C
                  breaches, misuse of data, or non-payment of fees.
                </p>
              </Section>

              <Section title="11. Governing Law & Dispute Resolution">
                <p>11.1 Governed by the laws of India.</p>
                <p>
                  11.2 Disputes first referred to mediation in Mangaluru;
                  unresolved disputes then arbitrated under the Indian
                  Arbitration and Conciliation Act, 1996, in Mangaluru,
                  Karnataka.
                </p>
              </Section>

              <Section title="12. Limitation of Liability">
                <p>
                  Vritti’s aggregate liability to an Organization under these
                  T&C shall not exceed the fees paid by the Organization in the
                  prior 12 months.
                </p>
              </Section>

              <Section title="13. Contact Information">
                <p>
                  <b>Email:</b> info@vrittigroup.com
                </p>
                <p>
                  <b>Address:</b> Ground Floor, Door no 4-80/10, KKMP Commercial
                  Complex, Mahathmnagar Layout, Kavoor, Mangaluru, Dakshina
                  Kannada, Karnataka, 575015
                </p>
              </Section>
            </Card>
          </TabsContent>
          {/* AGENCIES T&C CONTENT */}
          <TabsContent value="agencies">
            <Card className="p-6 sm:p-8 shadow-md">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
                Terms and Conditions for Agencies
              </h2>

              <Section title="1. Introduction">
                <p>
                  1.1 These Terms and Conditions ("T&C") apply to agencies
                  (“Agencies”) that partner with Vritti Groups to source and
                  onboard candidates.
                </p>
                <p>
                  1.2 Use of the Platform as an Agency constitutes acceptance of
                  these T&C.
                </p>
              </Section>

              <Section title="2. Definitions">
                <p>
                  <b>Agency:</b> A recruitment or placement partner verified by
                  Vritti to source and manage Candidates.
                </p>
                <p>
                  <b>Services:</b> Sourcing, onboarding, and support
                  functionalities provided by the Platform.
                </p>
              </Section>

              <Section title="3. Agency Registration & Verification">
                <p>
                  3.1 Agencies must submit valid company registration, license,
                  and POC details.
                </p>
                <p>
                  3.2 Vritti’s data verification team reserves the right to
                  approve, suspend, or terminate Agency access for
                  non-compliance or misrepresentation.
                </p>
              </Section>

              <Section title="4. Agency Obligations">
                <p>
                  4.1 Collect and upload Candidate data only with explicit
                  Candidate consent.
                </p>
                <p>
                  4.2 Ensure all submitted Candidate documents and information
                  are accurate and lawful.
                </p>
                <p>
                  4.3 Maintain confidentiality of Platform credentials and data
                  access.
                </p>
              </Section>

              <Section title="5. Intellectual Property & Confidentiality">
                <p>
                  5.1 All Platform materials, software, and Candidate data are
                  the property of Vritti Groups.
                </p>
                <p>
                  5.2 Agencies shall not copy, reproduce, or distribute Platform
                  content or create competing services.
                </p>
                <p>
                  5.3 Confidential information must not be disclosed or used
                  outside the scope of the Services.
                </p>
              </Section>

              <Section title="6. Service Fees & Payment">
                <p>
                  6.1 Any fees payable to Agencies for sourcing services are
                  governed by separate Service Agreements.
                </p>
                <p>6.2 Vritti is not liable for fees charged by Agencies.</p>
              </Section>

              <Section title="7. Data Privacy">
                <p>
                  7.1 Agency data processing is governed by the separate Agency
                  Privacy Policy.
                </p>
                <p>
                  7.2 Misuse of Candidate or Organization data by Agencies may
                  result in suspension, termination, and legal recourse.
                </p>
              </Section>

              <Section title="8. Force Majeure">
                <p>
                  Neither party shall be liable for delays due to causes beyond
                  its reasonable control, including acts of God, terrorism, or
                  natural disasters.
                </p>
              </Section>

              <Section title="9. Termination">
                <p>
                  9.1 Agencies may terminate their partnership at any time with
                  written notice to info@vrittigroup.com.
                </p>
                <p>
                  9.2 Vritti may suspend or terminate Agency access for
                  violation of these T&C, misuse of data, or failure to meet
                  quality standards.
                </p>
              </Section>

              <Section title="10. Governing Law & Dispute Resolution">
                <p>10.1 Governed by the laws of India.</p>
                <p>
                  10.2 Disputes first referred to mediation in Mangaluru; if
                  unresolved, final arbitration under the Indian Arbitration and
                  Conciliation Act, 1996, in Mangaluru, Karnataka.
                </p>
              </Section>

              <Section title="11. Limitation of Liability">
                <p>
                  Vritti’s aggregate liability to an Agency under these T&C
                  shall not exceed any compensation paid to the Agency in the 12
                  months preceding the claim.
                </p>
              </Section>

              <Section title="12. Contact Information">
                <p>
                  <b>Email:</b> info@vrittigroup.com
                </p>
                <p>
                  <b>Address:</b> Ground Floor, Door no 4-80/10, KKMP Commercial
                  Complex, Mahathmnagar Layout, Kavoor, Mangaluru, Dakshina
                  Kannada, Karnataka, 575015
                </p>
              </Section>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
