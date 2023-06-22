"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const FormExampleSchema = z.object({
	name: z.string({
		required_error: "Nome não pode ficar em branco!",
		invalid_type_error: "Nome inválido!",
	}),
});
type FormType = z.infer<typeof FormExampleSchema>;

export function FormExample() {
	const form = useForm<FormType>({
		resolver: zodResolver(FormExampleSchema),
	});

	return (
		<div>
			<form></form>
		</div>
	);
}
