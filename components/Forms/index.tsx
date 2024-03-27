"use client";

import { UploadSignedFormSchema } from "@/app/validationSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LinkButton from "../LinkButton";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const UploadFormTable = () => {
  const form = useForm<z.infer<typeof UploadSignedFormSchema>>({
    resolver: zodResolver(UploadSignedFormSchema),
    defaultValues: {
      signedNNC1: undefined,
    },
  });

  const SignedNNC1Ref = form.register("signedNNC1", { required: true });

  function onSubmit(values: z.infer<typeof UploadSignedFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Document Status</CardTitle>
            <CardDescription>
              This is the status of documents prepared by the project of your
              company.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No.</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Generated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Upload Documents</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>NNC1 Form</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/users/shareholder1/S1.pdf" />
                  </TableCell>
                  <TableCell className="text-yellow-500">Pending</TableCell>
                  <TableCell>
                    <FormField
                      name="signedNNC1"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="File"
                              placeholder="Upload a Copy"
                              {...SignedNNC1Ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Share Agreement</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/SA.pdf" />
                  </TableCell>
                  <TableCell className="text-yellow-500">Pending</TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>Minutes</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/MOM.pdf" />
                  </TableCell>
                  <TableCell className="text-yellow-500">Pending</TableCell>
                  <TableCell></TableCell>
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
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end items-center">
            <Button type="submit" variant="destructive">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default UploadFormTable;
