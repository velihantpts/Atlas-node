import { Fragment, useState } from 'react';
import { Disclosure, MinusIcon, PlusIcon } from '@headlessui/react';
import { Link } from 'react-router-dom';

function FilterComponent({ handleEventTypeSelection }) {
  const filters = [
    {
      id: 'category',
      name: 'Etkinlik Seç',
      options: [
        { value: 'Hepsi', label: 'Hepsi', checked: true },
        { value: 'Konser', label: 'Konser', checked: false },
        { value: 'Sergi', label: 'Sergi', checked: false },
        { value: 'Tiyatro', label: 'Tiyatro', checked: false },
        { value: 'Çocuk', label: 'Çocuk', checked: false },
        { value: 'Festival', label: 'Festival', checked: false },
        { value: 'Atölye', label: 'Atölye', checked: false },
        { value: 'Dans', label: 'Dans', checked: false },
        { value: 'Seminer', label: 'Seminer', checked: false },
      ],
    },
  ];

  return (
    <form className="hidden lg:block">
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    {/* {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )} */}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onClick={() => handleEventTypeSelection(option.value)}
                      />
                      <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}
export default FilterComponent;