import { Fragment,  useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Caret, CaretUp } from '../icons';

interface PropsInterface {
  id: number;
  name: string;
}
interface MyListboxProps {
  options: PropsInterface[];
  selectedItems: PropsInterface[];
  setSelectedItems: (items: PropsInterface[]) => void;
}

function MyListbox({ options, selectedItems, setSelectedItems  }: MyListboxProps) {
  // const [selectedItems, setSelectedItems] = useState<PropsInterface[]>([options[0], options[1]]);

  const handleSelectionChange = (item: PropsInterface) => {
    const updatedSelection = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedSelection);
  };

  return (
    <Listbox value={selectedItems}  onChange={setSelectedItems} multiple>
       {({ open }) => (
        <>
        
        <Listbox.Button 
        className={`${open ? 'bg-white border-2 border-black-300' : 'bg-gray50'}  relative w-full flex justify-between cursor-default rounded-lg mt-2  py-3 px-4 text-left focus:outline-none    sm:text-sm`}>
        <span>{selectedItems.map((item) => item.name).join(', ')} </span>
        <span className='text-black-300'>
         {open ? <CaretUp/> : <Caret />}
        </span>
      </Listbox.Button>
      <Transition 
       as={Fragment}
       leave="transition ease-in duration-100"
       leaveFrom="opacity-100"
       leaveTo="opacity-0"
      >
<Listbox.Options className={"shadow-md bg-white rounded-lg py-2"}>
        {options.map((option) => (
          <Listbox.Option key={option.id}  className={({ active }) =>
          `relative cursor-default select-none py-2 pl-10 pr-4  text-black-300`
        } value={option}>

              {({ selected }) => (
                    <div className='flex gap-3 items-center' >
                      
                            <input 
                            type="checkbox" 
                            name="checked-demo" 
                            checked={selected ? true : false}
                            className="form-tick appearance-none bg-white text-white bg-check h-4 w-4 border border-gray-300 checked:bg-black checked:border-transparent focus:outline-none"/>
                                
                           
                      <span
                        className={`block truncate capitalize ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      
                    </div>
                  )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </Transition>
      
        </>)}
      
    </Listbox>
  );
}

export default MyListbox;
