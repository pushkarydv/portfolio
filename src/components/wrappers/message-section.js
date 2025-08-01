import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BotIcon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BorderBox } from './border-box';

function MessageSectionBase() {
  return (
    <div className='w-full p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center items-center h-full font-serif font-bold md:text-lg text-left'>
          <p>
            <span className='text-xl md:text-4xl'>☃️</span> <br /> Loved my
            work? <br /> or anything else to discuss.. <br /> Just drop me a
            message
          </p>
        </div>
        <Tabs defaultValue='message'>
          <TabsList className='w-full'>
            <TabsTrigger value='message'>Message</TabsTrigger>
            <TabsTrigger value='chat'>
              AI Chat{' '}
              <Badge variant='outline' className='text-violet-500 px-1'>
                <BotIcon />
              </Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='message'>
            {' '}
            <Card className='p-0'>
              <CardContent className='p-0'>
                <iframe
                  src='https://mg.writewrap.in/widget/clrbyc3ie0000j8lc9zdhosjk?message=Can%20you%20help%20me%20build%20XYZ'
                  className='w-full min-h-[32rem] border-0'
                  title='Contact Form'
                  loading='lazy'
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='chat'>
            <Card className='p-0'>
              <CardContent className='p-0'>
                <iframe
                  src='https://tw-pushkaryadavin-chat.vercel.app/'
                  className='w-full min-h-[32rem] border-0 rounded-xl'
                  title='Contact Form'
                  loading='lazy'
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export function MessageSection() {
  return (
    <>
      <BorderBox joinTop={true} joinBottom={false}>
        <MessageSectionBase />
      </BorderBox>
    </>
  );
}
