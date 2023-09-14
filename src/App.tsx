import {Github, Wand2} from 'lucide-react'
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'
import { VideoInputForm } from './components/video-input-form'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Boost your results with AI for your YouTube video 🚀</span>
          <Separator orientation='vertical' className='h-6'/>
          <Button variant="outline" className='rounded-full'>
            <Github className='w-4 h-4' />
          </Button>
        </div>
      </div>
      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 border-b gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea 
              className='resize-none p-5 leading-relaxed'
              placeholder='Include the prompt for AI'/>
            <Textarea 
              className='resize-none p-5 leading-relaxed'
              placeholder='Resultado gerado pela IA'          
              readOnly
            />
          </div>
          <p className='text-sm text-muted-foreground'>Lembre-se: você pode usar a variável <code className='text-violet-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado</p>
        </div>
        <aside className='w-80 space-y-6'>
          <VideoInputForm/>
          <Separator/>
          <form className='space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='title'>
                      Título para o vídeo
                    </SelectItem>
                    <SelectItem value='description'>
                      Descrição para o vídeo
                    </SelectItem>
                  </SelectContent>                  
              </Select>
              
            </div>
            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                  <SelectTrigger>
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='gpt3.5'>
                        GPT 3.5-turbo 16k
                      </SelectItem>
                    </SelectContent>                  
              </Select>
              <span className='block text-xs text-muted-foreground italic'>Você poderá customizar esta opção em breve</span>
            </div>
            <Separator/>
            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>Valores mais altos tendem a deixar o resultado mais criativo, porém com possiveis erros</span>
            </div>
            <Separator/>
            <Button type='submit' className='gap-3 w-full'>
              Executar
              <Wand2 className='w-4 h-4'/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
