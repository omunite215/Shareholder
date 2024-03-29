import {
  Card,
  CardContent,
  CardDescription,
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

const IDProof = () => {
  return (
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
              <TableHead>Download</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>ID Proof</TableCell>
              <TableCell>
                <LinkButton href="/documents/users/shareholder1/ID.pdf" />
              </TableCell>
              <TableCell className="text-green-500">Submited</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Address Proof</TableCell>
              <TableCell>
                <LinkButton href="/documents/users/shareholder1/ID.pdf" />
              </TableCell>
              <TableCell className=" text-yellow-500">Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default IDProof;
