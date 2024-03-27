import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UploadFormTable from "./Forms";
import { IDProof } from "./Tables";

const Main = () => {
  return (
    <Card className="my-6">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardDescription>Tencent Games Pvt. Ltd / Shareholder</CardDescription>
        <CardTitle>Tony Zha Shang</CardTitle>
        <CardDescription>Person</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <UploadFormTable />
        <IDProof />
      </CardContent>
    </Card>
  );
};

export default Main;
