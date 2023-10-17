import SectionHeading from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Email = () => {
  return (
    <div className="flex flex-col items-center h-[75vh]">
      <SectionHeading text="Verify your email" />
      <p>
        We'll send an email to the address you provide. Click the link in the
        email to verify your account.
      </p>
      <Input className="w-[30%] mt-12" type="email" placeholder="Email" />
      <Button className="mt-6">Verify</Button>
    </div>
  );
};

export default Email;
