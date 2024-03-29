import LinkButton from "../LinkButton";
import {
  Card,
  CardContent,
  CardDescription,
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr No.</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Download</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead>Download</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>NNC1 Form</TableCell>
              <TableCell>
                <LinkButton href="/documents/NNC1.pdf" />
              </TableCell>
              <TableCell className="text-yellow-500">Pending</TableCell>
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
              <TableCell className="text-yellow-500">Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Minutes</TableCell>
              <TableCell>
                <LinkButton href="/documents/MOM.pdf" />
              </TableCell>
              <TableCell className="text-yellow-500">Pending</TableCell>
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
      </CardContent>
    </Card>
  );
};

export default UploadFormTable;
