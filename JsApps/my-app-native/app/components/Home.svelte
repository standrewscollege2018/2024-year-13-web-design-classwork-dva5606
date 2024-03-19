<page>
    <actionBar title="Home" />
    <gridLayout>
        <label class="info">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span text=" {message}" />
            </formattedString>
        </label>
    </gridLayout>
</page>

<script lang="ts">
    let message: string = "Blank Sveltwnfjwfibwfwiefbaiwefbawebfabwflabefabwefbalwefblawbflawbefle Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        vertical-align: center;
    }
</style>
<script>
    import { DarkMode } from 'flowbite-svelte';
  </script>
  
  <DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />