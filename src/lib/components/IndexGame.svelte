<script lang="ts">
  import { superForm, defaults, setMessage } from "sveltekit-superforms";
  import { zod } from "sveltekit-superforms/adapters";
  import { z } from "zod";
  import Input from "./ui/input/input.svelte";
  import {
    FormControl,
    FormButton,
    FormFieldErrors,
    FormLabel,
    FormField,
  } from "./ui/form";
  import Button from "./ui/button/button.svelte";

  const schema = z.object({
    animal: z.string().min(3).max(12),
  });

  let message = "";

  const form = superForm(defaults(zod(schema)), {
    SPA: true,
    validators: zod(schema),
    onUpdate({ form }) {
      if (form.valid) {
        if (
          form.data.animal.includes("cat") ||
          form.data.animal.includes("kitten")
        ) {
          message = "🎉🎉🎉 You guessed it! Meow! 🎉🎉🎉";
        } else if (form.data.animal.includes("dog")) {
          message = "Close, but no cigar!";
        } else if (form.data.animal.includes("dolphin")) {
          message = "Great guess, but no, equally playful though!";
        } else if (form.data.animal.includes("shark")) {
          message = "No, but they're both predators";
        } else if (
          form.data.animal.includes("hamster") ||
          form.data.animal.includes("guinea pig") ||
          form.data.animal.includes("rabbit")
        ) {
          message = "No, but they're both small and cute";
        } else {
          message = "Try again!";
        }
      }
    },
  });
  const { form: formData, enhance } = form;
</script>

{#if message}
  <p>{message}</p>
  <Button on:click={() => (message = "")}>Try again</Button>
{:else}
  <form method="POST" use:enhance>
    <FormField {form} name="animal">
      <FormControl let:attrs>
        <FormLabel>Animal</FormLabel>
        <Input {...attrs} bind:value={$formData.animal} />
      </FormControl>
      <FormFieldErrors />
    </FormField>
    <FormButton>Guess</FormButton>
  </form>
{/if}
