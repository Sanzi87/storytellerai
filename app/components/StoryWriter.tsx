'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Section } from 'lucide-react';

const StoryWriter = () => {
  return (
    <div className='flex flex-co container'>
      <section className='flex-1 flex flex-col border bordel-purple-300 rounded-md p-10 space-y-2'>
        <Textarea
          className='flex-1 text-black'
          placeholder='Write a story about a robot and a human who became friends...'
        />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='How many pages should the story be?' />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className='w-full' size='lg'>
          Generate Story
        </Button>
      </section>

      <Section className='flex-1 pb-5 mt-5'></Section>
    </div>
  );
};

export default StoryWriter;
