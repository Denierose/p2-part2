import Button from "./components/Button";
import Input from "./components/Input";
import H2 from "./components/H2";
import Image from "./components/Image";

export default function App() {
  
  return (
    <>
      <H2>P2 INDIVIDUAL ACTIVITY | PART 2</H2>
      <div className="imageContainer">
        <div className="wrap">
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="/img1.jpg" width={200} height={200} variant="rounded" />
          <Image src="/img2.jpg " width={200} height={200} variant="rounded" />
          <Image src="/cite.png" width={100} height={100} variant="circular" />
        </div>
      </div>
      <div className="container">
        <Input variant="input1" placeholder="Textfield 1"/>
        <Input variant="input1" placeholder="Textfield 2"/>
        <Input variant="input2" placeholder="Textfield 3" />
        <Input variant="input2" placeholder="Textfield 4"/>
      </div>
      <Button variant="button1">CANCEL</Button>
      <Button variant="button2">SUBMIT</Button>
    </>
  );
};



