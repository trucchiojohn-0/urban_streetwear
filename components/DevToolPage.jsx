'use client';
import React, { useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function DevTool() {
    /* const supabase = createClient();

    const [form, setForm] = useState({
        name_product: "",
        description: "",
        price: "",
        image_url: "",
        image_active_url: "",
        category: ""
    })

    const [productId, setProductId] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

const initialFormState={
    name_product: "",
        description: "",
        price: "",
        image_url: "",
        image_active_url: "",
        category: ""
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmitCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name_product: form.name_product,
          description: form.description,
          price: parseFloat(form.price) || 0, 
          image_url: form.image_url,
          image_active_url: form.image_active_url,
          category: form.category
        }
      ])
      .select();

    setLoading(false);

    if (error) {
      setResponseMessage(`Erro ao cadastrar: ${error.message}`);
    } else {
      setResponseMessage("Produto inserido com sucesso!");
      setForm(initialFormState);
    }
  }

  async function handleFetchProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!productId) {
      setResponseMessage("Por favor, insira o ID do produto para buscar.");
      return;
    }
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("product_id", productId)
      .single(); 

    setLoading(false);

    if (error) {
      setResponseMessage(`Erro ao buscar: ${error.message}`);
    } else if (data) {
      setForm({
        name_product: data.name_product,
        description: data.description || "",
        price: data.price.toString(),
        image_url: data.image_url,
        image_active_url: data.image_active_url,
        category: data.category
      });
      setResponseMessage("Produto encontrado e carregado no formulário!");
    }
  }

  async function handleUpdateProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!productId) {
      setResponseMessage("Por favor, insira o ID do produto para atualizar.");
      return;
    }
    setLoading(true);

    const { error } = await supabase
      .from("products")
      .update({
        name_product: form.name_product,
        description: form.description,
        price: parseFloat(form.price) || 0,
        image_url: form.image_url,
        image_active_url: form.image_active_url,
        category: form.category
      })
      .eq("product_id", productId);

    setLoading(false);

    if (error) {
      setResponseMessage(`Erro ao atualizar: ${error.message}`);
    } else {
      setResponseMessage("Produto atualizado com sucesso!");
    }
  }

  async function handleDeleteProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!productId) {
      setResponseMessage("Por favor, insira o ID do produto para remover.");
      return;
    }
    
    if (!confirm("Tem certeza que deseja deletar este produto?")) return;
    
    setLoading(true);

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("product_id", productId);

    setLoading(false);

    if (error) {
      setResponseMessage(`Erro ao remover: ${error.message}`);
    } else {
      setResponseMessage("Produto removido com sucesso!");
      setForm(initialFormState);
      setProductId("");
    }
  }
 */
    return (
        <div className="flex flex-col justify-between items-center gap-5 md:w-auto h-4/5 m-8 border-2 rounded-md ">
            <h1 className="font-[var(--font-saira-stencil)] font-bold text-4x1 underline">Área do Desenvolvedor</h1>
            <div className="flex justify-center items-center  min-h-[60vh] max-w-[500px]">
                <form>
                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Nome do produto:
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Insira o nome do produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Descrição:
                        <input
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Insira uma descrição para o produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Preço:
                        <input
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Insira o preço do produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Imagem principal:
                        <input
                            name="image_url"
                            value={form.image_url}
                            onChange={handleChange}
                            placeholder="Insira uma URL da imagem do produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Imagem secundária:
                        <input
                            name="image2_url"
                            value={form.image2_url}
                            onChange={handleChange}
                            placeholder="Insira uma URL da imagem animada do produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">Categoria:
                        <input
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="Insira a categoria do produto"
                        />
                    </label>

                    <label className="flex flex-col mb-15 font-bolder font-[--font-montserrat]">ID do produto para busca/atualização/exclusão:</label>

                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        placeholder="Insira o ID do produto"
                    />
                    <div className="flex justify-between gap-y-2 gap-x-5 m-4 py-[5px] px-[20px] w-full">
                        <button type="submit" onClick={handleSubmitCreate} className="block text-center bg-[#e40909] text-white border border-black rounded-[5px] cursor-pointer mt-5 mb-2.5 mx-auto py-2 px-5 hover:bg-[#8a0202] active:scale-90 transition-all">Cadastrar produto</button>
                        <button type="submit" onClick={handleFetchProduct} className="block text-center bg-[#e40909] text-white border border-black rounded-[5px] cursor-pointer mt-5 mb-2.5 mx-auto py-2 px-5 hover:bg-[#8a0202] active:scale-90 transition-all">Selecionar produto</button>
                        <button type="submit" onClick={handleUpdateProduct} className="block text-center bg-[#e40909] text-white border border-black rounded-[5px] cursor-pointer mt-5 mb-2.5 mx-auto py-2 px-5 hover:bg-[#8a0202] active:scale-90 transition-all">Atualizar produto</button>
                        <button type="submit" onClick={handleDeleteProduct} className="block text-center bg-[#e40909] text-white border border-black rounded-[5px] cursor-pointer mt-5 mb-2.5 mx-auto py-2 px-5 hover:bg-[#8a0202] active:scale-90 transition-all">Remover produto</button>
                    </div>
                </form>
            </div>

            <div>{responseMessage}</div>
        </div>
    );
}