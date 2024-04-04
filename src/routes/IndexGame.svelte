<script lang="ts">
  import { superForm, defaults } from "sveltekit-superforms";
  import { zod } from "sveltekit-superforms/adapters";
  import { z } from "zod";
  import Input from "../lib/components/ui/input/input.svelte";
  import {
    FormControl,
    FormButton,
    FormFieldErrors,
    FormLabel,
    FormField,
  } from "../lib/components/ui/form";
  import * as Card from "$lib/components/ui/card/index";
  import Button from "../lib/components/ui/button/button.svelte";
  import FormDescription from "../lib/components/ui/form/form-description.svelte";

  const schema = z.object({
    animal: z.string().min(3).max(12),
  });

  let message = "";

  function evaluateGame(answer: string) {
    const lowAnswer = answer.toLocaleLowerCase();

    if (lowAnswer.includes("cat") || lowAnswer.includes("kitten")) {
      message = "🎉🎉🎉 You guessed it! Meow! 🎉🎉🎉";
    } else if (lowAnswer.includes("dog")) {
      message = "Close, but no cigar!";
    } else if (lowAnswer.includes("dolphin")) {
      message = "Great guess, but no, equally playful though!";
    } else if (lowAnswer.includes("shark")) {
      message = "No, but they're both predators";
    } else if (
      lowAnswer.includes("hamster") ||
      lowAnswer.includes("guinea pig") ||
      lowAnswer.includes("rabbit")
    ) {
      message = "No, but they're both small and cute";
    } else {
      message = "Try again!";
    }
  }

  const form = superForm(defaults(zod(schema)), {
    SPA: true,
    validators: zod(schema),
    onUpdate({ form }) {
      if (form.valid) {
        evaluateGame(form.data.animal);
      }
    },
  });
  const { form: formData, enhance } = form;
</script>

<div class="bg-gray-50 py-10 px-2">
  <Card.Root class="max-w-md mx-auto">
    <Card.Header>
      <Card.Title>Animal Quiz</Card.Title>
    </Card.Header>
    <Card.Content>
      <div class={!message ? "hidden" : ""}>
        <p class="mb-3">{message}</p>
        <Button on:click={() => (message = "")}>Try again</Button>
      </div>
      <form method="POST" use:enhance class={message ? "hidden" : ""}>
        <FormField {form} name="animal">
          <FormControl let:attrs>
            <FormLabel>Animal</FormLabel>
            <Input {...attrs} bind:value={$formData.animal} />
          </FormControl>
          <FormDescription>Guess the cutest animal there is</FormDescription>
          <FormFieldErrors />
        </FormField>
        <FormButton>Guess</FormButton>
      </form>
    </Card.Content>
  </Card.Root>
</div>
