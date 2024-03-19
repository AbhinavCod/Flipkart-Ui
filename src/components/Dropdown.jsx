import Dropdown from 'react-bootstrap/Dropdown';

function DropDownButton({label,val1,val2,val3,val4}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-blue-500'>
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{val1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{val2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{val3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButton;