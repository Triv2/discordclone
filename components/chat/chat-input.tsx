'use client'

import { useForm } from "react-hook-form";
import * as z from "zod";

interface ChatInputProps {
  apiUrl: string;
  query: Record<string, any>;
  name: string;
  type: "conversation" | "channel";
}

const formSchema = z.object({
  content: z.string().min(1),
});

export const ChatInput = ({
  apiUrl,
  query,
  name,
  type,
}: ChatInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: "",
    },
  })
  return (
    <div>
      Chat Input!
    </div>
  )
}