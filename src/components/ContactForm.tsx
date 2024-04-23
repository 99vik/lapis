import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  return (
    <div className="mx-auto px-4 mt-16 w-full max-w-[700px] space-y-3">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="">
          Please fill the below form and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="dark: required" htmlFor="name">
            Email
          </Label>
          <Input
            type="email"
            className="border-neutral-600 text-white bg-black"
            id="name"
            placeholder="Enter your e-mail"
            required
          />
        </div>

        <div className="space-y-1">
          <Label className=" dark: required" htmlFor="message">
            Message
          </Label>
          <Textarea
            className="border-neutral-600 text-white bg-black w-full p-2"
            id="message"
            placeholder="Type your message"
            required
          />
        </div>
        <Button
          className="w-full bg-none font-semibold text-black"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
