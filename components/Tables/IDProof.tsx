"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LinkButton from "../LinkButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UploadESignSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const IDProof = () => {
  const form = useForm<z.infer<typeof UploadESignSchema>>({
    resolver: zodResolver(UploadESignSchema),
    defaultValues: {
      eSign: undefined,
    },
  });

  const eSignRef = form.register("eSign", { required: true });

  function onSubmit(values: z.infer<typeof UploadESignSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>ID Proof</CardTitle>
            <CardDescription>
              Here is a summary on your submitted ID Proofs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No.</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Generated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Upload</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>ID Proof</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/users/shareholder1/ID.pdf" />
                  </TableCell>
                  <TableCell className="text-green-500">Verified</TableCell>
                  <TableCell className="text-muted-foreground">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Address Proof</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/users/shareholder1/ID.pdf" />
                  </TableCell>
                  <TableCell className=" text-yellow-500">Pending</TableCell>
                  <TableCell className="text-muted-foreground">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>E-Signature</TableCell>
                  <TableCell>
                    <LinkButton href="/documents/users/shareholder1/ID.pdf" />
                  </TableCell>
                  <TableCell className=" text-yellow-500">Pending</TableCell>
                  <TableCell>
                    <FormField
                      name="eSign"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="File"
                              placeholder="Upload a Copy"
                              {...eSignRef}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end items-center">
            <Button type="submit" variant="destructive">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default IDProof;
