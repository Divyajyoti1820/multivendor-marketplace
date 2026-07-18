import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <div>
        <Button variant="elevated">
          Test Button
        </Button>
      </div>
      <div>
        <Input placeholder="Test Input" />
      </div>
       <div>
         <Progress value={50} />
      </div>
      <div>
        <Textarea />
      </div>
      <div>
        <Checkbox checked />
      </div>
    </div>
  );
}
