import { useState } from 'react';
import { IconChevronDown, IconChevronUp, IconSearch, IconSelector } from '@tabler/icons-react';
import {
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';

type Claim = {
  id: string;
  patientName: string;
  testOrderedName: string;
  testOrderDate: Date;
  authorizationStatus: string;
};

type Table_data_inputs = {
  items: Claim[];
};

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th>
      <UnstyledButton onClick={onSort}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center>
            <Icon size={16} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: Claim[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    Object.keys(item).some((key) => item[key as keyof Claim].toString().toLowerCase().includes(query))
  );
}

function sortData(
  data: Claim[],
  payload: { sortBy: keyof Claim | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    }),
    payload.search
  );
}

export default function Table_info({ items }: Table_data_inputs) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(items);
  const [sortBy, setSortBy] = useState<keyof Claim | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof Claim) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(items, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(items, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.patientName}</Table.Td>
      <Table.Td>{item.testOrderedName}</Table.Td>
      <Table.Td>{item.testOrderDate.toLocaleDateString()}</Table.Td> {/* Convert Date to string */}
      <Table.Td>{item.authorizationStatus}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="bg-white p-4 shadow-md rounded-md flex flex-col h-full w-full">
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch size={16} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <div className="flex-grow overflow-auto" style={{ maxHeight: 'calc(72vh - 100px)' }}>
        <Table horizontalSpacing="md" verticalSpacing="xs" layout="fixed" className="w-full">
          <Table.Thead>
            <Table.Tr>
              <Th
                sorted={sortBy === 'patientName'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('patientName')}
              >
                Name of Patient
              </Th>
              <Th
                sorted={sortBy === 'testOrderedName'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('testOrderedName')}
              >
                Test Ordered
              </Th>
              <Th
                sorted={sortBy === 'testOrderDate'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('testOrderDate')}
              >
                Test Order Date
              </Th>
              <Th
                sorted={sortBy === 'authorizationStatus'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('authorizationStatus')}
              >
                Auth Status
              </Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={4}>
                  <Text fw={500} ta="center">
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}


