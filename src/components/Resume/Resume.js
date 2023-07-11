import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';


const Resume = () => (
  <Button
    href="https://drive.google.com/file/d/1Cj3L21AXCjUhYscX-gRiWKIqxrXXiy3I/view?usp=sharing"
    target="_blank"
    className="w-10 h-8 align-middle justify-center"
    variant="contained"
    size="small"
  >
    <FontAwesomeIcon icon={faFile} className="w-6 h-6"/>

  </Button>
);

export default Resume;