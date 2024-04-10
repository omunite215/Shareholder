"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LinkButton from "../LinkButton";

const formSchema = z.object({
  sign: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const UploadFormTable = () => {
  const [signPreview, setsignPreview] = useState("-");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sign: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Status</CardTitle>
        <CardDescription>
          This is the status of documents prepared by the project of your
          company.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No.</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Review your Documents</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>NNC1 Form</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/NNC1.pdf" />
                  </TableCell>
                  <TableCell className="text-destructive">
                    Send Signed Physical Copy to your Account User
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Article of Association (A & A)</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/AA.pdf" />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    No Sign Needed
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Share Agreement</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/SA.pdf" />
                  </TableCell>
                  <TableCell className=" flex items-center gap-3">
                    <FormField
                      control={form.control}
                      name="sign"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Type Your Initials..."
                              {...field}
                              onChange={(e) => {
                                form.setValue("sign", e.target.value);
                                setsignPreview(form.getValues("sign"));
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>Minutes</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/MOM.pdf" />
                  </TableCell>
                  <TableCell className="font-greatvibes text-4xl">
                    <span className="font-sans text-base">
                      Your Sign Preview :&nbsp;
                    </span>
                    {signPreview}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell>IRBRI</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/IRBR1.pdf" />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    No Sign Needed
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UploadFormTable;
